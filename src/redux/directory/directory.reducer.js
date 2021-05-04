const INITIAL_STATE = {
    sections: [{
        title: 'Pet Food',
        imageUrl: 'https://image.shutterstock.com/image-photo/pet-accessories-food-toy-top-600w-759553846.jpg',
        subtitle: 'Shop Now',
        urlPath: 'shop/hats',
        id: 1
    },
    {
        title: 'Pet Accessories',
        imageUrl: 'https://image.shutterstock.com/image-photo/family-buying-supplies-little-puppy-260nw-1032806578.jpg',
        subtitle: 'Shop Now',
        urlPath: 'shop/sneakers',
        id: 2
    },
    {
        title: 'Pet Clinic',
        imageUrl: 'https://image.shutterstock.com/image-photo/portrait-beautiful-veterinarian-holding-young-600w-383303596.jpg',
        subtitle: 'consult now',
        urlPath: 'shop/jackets',
        id: 3
    },
    {
        title: 'Puppy love',
        imageUrl: 'https://image.shutterstock.com/image-photo/pomeranian-dog-sitting-on-bed-600w-1444039361.jpg',
        subtitle: 'adopt',
        size: 'large',
        urlPath: 'shop/women',
        id: 4
    },
    {
        title: 'Cat Cuddle',
        imageUrl: 'https://image.shutterstock.com/image-photo/creative-workspace-girl-working-computer-260nw-367928978.jpg',
        subtitle: 'adopt',
        size: 'large',
        urlPath: 'shop/men',
        id: 5
    }]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default: return state;
    }
}

export default directoryReducer;