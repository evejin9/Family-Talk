import React, { useEffect } from 'react';
import PassListItem from './PassListItem';
import { getAllPassList, selectPassList } from '../../features/passSlice';
import { useDispatch, useSelector } from 'react-redux';
import data from "../../passData.json";

function PassList(props) {

  const dispatch = useDispatch();
  const passList = useSelector(selectPassList);

  useEffect(() => {
    dispatch(getAllPassList(data));
  }, [passList]);

  return (
    <div>
      {passList.map(pass => <PassListItem key={pass.membershipName} pass={pass} />)}
    </div>
  );
}

export default PassList;