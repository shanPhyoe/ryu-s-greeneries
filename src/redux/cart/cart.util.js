export const addItemToCart = (itemToAdd, cartItems) => {
    const existingItem = cartItems.find(item => item.id === itemToAdd.id);

    if (existingItem) {
        return cartItems.map(item =>
            item.id === itemToAdd.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
    }

    return [
        ...cartItems,
        {
            id: itemToAdd.id,
            name: itemToAdd.name,
            imageUrl: itemToAdd.imageUrl,
            price: itemToAdd.price,
            quantity: 1,
        },
    ];
};
