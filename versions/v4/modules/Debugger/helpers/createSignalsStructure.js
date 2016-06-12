function createSignalsStructure(initialSignals) {

  const path = [];

  function createSignalDefinition(signal) {
    return {
      path: path.slice(),
      name: signal.name,
      id: signal.start,
      isSync: !!signal.isSync,
      isRouted: !!signal.isRouted,
      isWithinExecution: initialSignals.indexOf(signal) === -1,
      isExecuting: signal.isExecuting
    };
  }

  function findSignals(allSignals, entity, index) {

    path.push(index);

    // Is async chain
    if (Array.isArray(entity)) {
      allSignals = allSignals.concat(entity.reduce(findSignals, []));
    }

    if (entity.branches) {
      const signal = createSignalDefinition(entity)
      path.push('branches');
      allSignals = allSignals.concat(signal).concat((entity.branches || []).reduce(findSignals, []));
      path.pop();
    }

    if (entity.signals) {
      path.push('signals');
      allSignals = allSignals.concat(entity.signals.reduce(findSignals, []));
      path.pop();
    }

    if (entity.outputPath) {
      path.push('outputs');
      path.push(entity.outputPath);
      allSignals = allSignals.concat(entity.outputs[entity.outputPath].reduce(findSignals, []));
      path.pop();
      path.pop();
    }

    path.pop();

    return allSignals;
  }

  function isSame(signalA, signalB) {
    return !!signalA && signalA.name === signalB.name && signalA.isWithinExecution === signalB.isWithinExecution
  }

  function setGroupingIndication(signals) {
    return signals.map((signal, index) => {
      let prevSignal = signals[index - 1];
      const isGrouped = isSame(prevSignal, signal);

      const mappedSignal = {
        ...signal,
        isGrouped: isGrouped
      };

      let nextSignal = signals[index + 1];
      if (!isGrouped && isSame(nextSignal, signal)) {

        let counter = 0;
        while (nextSignal && isSame(nextSignal, signal)) {
          nextSignal = signals[index + counter];
          counter++;
        }
        mappedSignal.groupCount = counter - 1;

      }


      if (isSame(prevSignal, signal)) {
        let counter = index;
        while (prevSignal && isSame(prevSignal, signal)) {
          prevSignal = signals[counter - 1];
          counter--;
        }
        mappedSignal.groupId = signals[counter + 1].id;
      }
      return mappedSignal;
    });
  }

  return setGroupingIndication(initialSignals.reduce(findSignals, []).reverse());
}

export default createSignalsStructure;
