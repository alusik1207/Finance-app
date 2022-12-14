import React, {useMemo} from 'react'
import './CategoryIcons.scss'
import CreditIcon from './icons/credit.svg'
import EducationIcon from './icons/education.svg'
import FoodIcon from './icons/food.svg'
import GiftIcon from './icons/gift.svg'
import HealthIcon from './icons/health.svg'
import SportIcon from './icons/sport.svg'
import TravelIcon from './icons/travel.svg'
import ShoppingIcon from './icons/shopping.svg'
import * as categories from './../../constans/expensesCategories'

const mapCategoryToIcon = {
    [categories.CREDIT_CATEGORY]: CreditIcon,
    [categories.FOOD_CATEGORY]: FoodIcon,
    [categories.EDUCATION_CATEGORY]: EducationIcon,
    [categories.GIFT_CATEGORY]: GiftIcon,
    [categories.HEALTH_CATEGORY]: HealthIcon,
    [categories.SPORT_CATEGORY]: SportIcon,
    [categories.SHOPPING_CATEGORY]: ShoppingIcon,
    [categories.TRAVEL_CATEGORY]: TravelIcon
}

const CategoryIcons = ({category,width=50,height=50,...props}) => {
    const iconComponent= useMemo(() => mapCategoryToIcon[category], [category]);
    if(!iconComponent){
        return null;
    }
    return(
        <div>{React.createElement(iconComponent,{width,height,...props})}</div>
    )
}

export default CategoryIcons

