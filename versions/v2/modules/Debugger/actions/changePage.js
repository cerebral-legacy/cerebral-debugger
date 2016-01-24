function changePage({input, module}) {
  module.state.set(['currentPage'], input.page);
}

export default changePage;
