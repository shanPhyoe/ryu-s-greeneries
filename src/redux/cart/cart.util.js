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
            parentRoute: itemToAdd.parentRoute,
            quantity: 1,
        },
    ];
};

export const reduceItemFromCart = (itemToReduce, cartItems) => {
    const existingItem = cartItems.find(item => item.id === itemToReduce.id);

    if (existingItem.quantity > 1) {
        return cartItems.map(item =>
            item.id === itemToReduce.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );
    } else {
        return cartItems.filter(item => item.id !== itemToReduce.id);
    }
};

export const removeItemFromCart = (itemToRemove, cartItems) => {
    return cartItems.filter(item => item.id !== itemToRemove.id);
};
