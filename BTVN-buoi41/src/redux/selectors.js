export const selectFilteredProducts = (state) => {
    const term = state.searchTerm.toLowerCase();
    return state.products.filter(
        (p) => p.name.toLowerCase().includes(term) || p.id.toLowerCase().includes(term)
    );
};
