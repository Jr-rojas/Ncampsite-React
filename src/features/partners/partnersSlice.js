import { PARTNERS } from '../../app/shared/PARTNERS';

export const selectAllPartners = () => {
    return PARTNERS
};

export const selectFeaturedPartners = () => {
    return PARTNERS.find((promotion) => promotion.featured)
};