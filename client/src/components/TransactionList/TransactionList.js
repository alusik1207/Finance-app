import React from "react";
import { calendarTime } from "../../helpers/dayjs";
import "./TransactionList.scss";
import DeleteIcon from './delete-icon.svg'
import CategoryIcons from "../CategoryIcons/CategoryIcons";
const TransactionList = ({ transactions, onDelete }) => {
  return (
    <ul className="transaction_list">
      {transactions.map((transaction) => {
        return (
          <li className="transaction_item">
            <div className="transaction_item__block transaction_item__title">
              {transaction.title}
            </div>
            <div className="transaction_item__block transaction_item__amount">

              {new Intl.NumberFormat('en', { style: 'currency', currency: 'UAH' }).format(transaction.amount)}
            </div>
            <div className="transaction_item__block transaction_item__category">
            <CategoryIcons  category={transaction.type} max-width={30} max-height={30} fill='#C9D1D6' stroke='#31383D'/>
            </div>
            <div className="transaction_item__block transaction_item__createdAt">
              {calendarTime(transaction.createdAt)}
            </div>
            <div className='transaction_item__delete' onClick={()=>onDelete(transaction.id)}><DeleteIcon width={16} height={16} fill='#f00'/></div>
          </li>
        );
      })}
    </ul>
  );
};

export default TransactionList;
