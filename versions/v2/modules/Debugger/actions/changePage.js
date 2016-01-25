function changePage({input, module}) {
  module.state.merge({
    currentPage: input.page,
    currentMutationPath: null
  });
}

export default changePage;
