import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { paymentPass, selectSelectedPass } from '../../features/passSlice';

const StyledListItem = styled.div`
  width: 100%;
  height: 90px;
  border: 2px solid #efefef;
  border-radius: 8px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #efefef;
  }

  & + & {
    margin-top: 20px;
  }

  &.selected {
    background-color: #efefef;
    border: 2px solid #f5cc8d;
  }
`;

const StyledMembership = styled.div`
  & .membership-content {
    font-size: 12px;
    margin-top: 6px;
  }
`;

const StyledPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & p {
    margin-left: 10px
  }

  & :first-child {
    color: #ccc;
    text-decoration: line-through;
    font-size: 14px
  }

  .free {
    color: #f5cc8d;
    font-size: 18px;
  }
`;

function PassListItem(props) {
  const { pass: { id, membershipName, membershipContent, price, discountPrice } } = props;
  const dispatch = useDispatch();
  const selectedPass = useSelector(selectSelectedPass);

  const handleClickPass = () => {
    dispatch(paymentPass({id, membershipName, membershipContent, price, discountPrice}));
  };

  return (
    <StyledListItem
      onClick={handleClickPass}
      className={selectedPass.id === id && "selected"}
    >
      <StyledMembership>
        <p>{membershipName}</p>
        <p className='membership-content'>{membershipContent}</p>
      </StyledMembership>
      <StyledPrice>
        <p>&#92;{Number(price).toLocaleString()}</p>
        <p className={id === "0" ? "free" : undefined}>{id === "0" ? '무료' : `${Number(discountPrice).toLocaleString()} /월`}</p>
      </StyledPrice>
    </StyledListItem>
  );
}

export default PassListItem;