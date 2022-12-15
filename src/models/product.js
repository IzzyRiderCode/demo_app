import { getImage } from "./imageMapper";

export const getProduct = ({ name, imageType, id }) => ({
    name,
    id,
    image: getImage(imageType),
});
