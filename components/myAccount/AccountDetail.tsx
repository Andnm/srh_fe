import React from "react";
import { Descriptions, Divider, Modal, Tag } from "antd";
import moment from "moment";
import { User } from "@models/user";
import { Customer } from "@models/customer";

interface Props {
  isCustomer: boolean;
  staffAccountDetail: User | undefined;
  customerAccountDetail: Customer | undefined;
}

const AccountDetail: React.FC<Props> = (props) => {
  const { staffAccountDetail, customerAccountDetail, isCustomer } = props;

  return (
    <div className="m-5 rounded-md">
      <Divider orientation="left" plain>
        <h3>Trang thông tin cá nhân</h3>
      </Divider>
      <Descriptions className="p-5" layout="vertical">
        {isCustomer === true ? (
          <>
            <Descriptions.Item label="Phone number">
              {customerAccountDetail?.phoneNumber}
            </Descriptions.Item>          
            <Descriptions.Item label="Name">
              {customerAccountDetail?.name}
            </Descriptions.Item>
            <Descriptions.Item label="Email">
              {customerAccountDetail?.email}
            </Descriptions.Item>
            <Descriptions.Item label="Gender">
              {customerAccountDetail?.gender}
            </Descriptions.Item>
            <Descriptions.Item label="Address" span={4}>
              {customerAccountDetail?.address}
            </Descriptions.Item>
          </>
        ) : (
          <>
            <Descriptions.Item label="Username">
              {staffAccountDetail?.userName}
            </Descriptions.Item>
            <Descriptions.Item label="Full Name">
              {staffAccountDetail?.fullname}
            </Descriptions.Item>
            <Descriptions.Item label="Email">
              {staffAccountDetail?.email}
            </Descriptions.Item>
            <Descriptions.Item label="Phone Number">
              {staffAccountDetail?.phoneNumber}
            </Descriptions.Item>
            <Descriptions.Item label="Address">
              {staffAccountDetail?.address}
            </Descriptions.Item>
          </>
        )}
      </Descriptions>
    </div>
  );
};

export default AccountDetail;
