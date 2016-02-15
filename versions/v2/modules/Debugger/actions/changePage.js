function changePage({input, state}) {
  state.merge('debugger', {
    currentPage: input.page
  });
}

export default changePage;
