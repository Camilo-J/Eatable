import styled from "@emotion/styled";

import CustomButton from "../components/Button";
import { useAuth } from "../context/auth-context";
import { typography } from "../styles/typography";
import Input from "../components/input";
import { useState } from "react";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 30px 0 30px;
  gap: 36px;
`;

const ContainerInputs = styled.div`
  background-color: #fff;
  min-width: 315px;
  //   height: 270px;
  padding: 1rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${typography.text.lg}
  text-align: initial;
  font-weight: 400;
`;

const Header = styled.div`
  display: flex;
  ${typography.head.xs}
`;

const Subtitle = styled.div`
  display: flex;
  justify-content: space-between;
  ${typography.text.lg}

  margin-bottom: 36px;
  font-weight: 600;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center
  padding: 0px;
  gap: 2rem;
`;

const ContainerButton = styled("div")`
  margin-top: 267px;
`;

const EditProfilePage = () => {
  const { update, navigate, user } = useAuth();
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    address: user.address,
  });

  const { email, phone, address, name } = formData;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await update(formData);
    const orders = JSON.parse(localStorage.getItem("CardOrders"));
    if (!orders) return navigate("./profile");

    if (orders.length) return navigate("./checkout");
  }

  return (
    <Container>
      <Header>My Profile</Header>
      <div>
        <Subtitle>
          <p>Update Personal details</p>
        </Subtitle>
        <Form onSubmit={handleSubmit}>
          <ContainerInputs>
            <Input
              name="name"
              type="text"
              value={name}
              onChange={handleChange}
              label="Name"
              color={"#fff"}
            />
            <Input
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              label="Email"
              color={"#fff"}
            />
            <Input
              name="phone"
              type="number"
              value={phone}
              onChange={handleChange}
              label="Phone"
              color={"#fff"}
            />
            <Input
              name="address"
              type="text"
              value={address}
              onChange={handleChange}
              label="Address"
              color={"#fff"}
            />
          </ContainerInputs>

          <ContainerButton>
            <CustomButton>Update</CustomButton>
          </ContainerButton>
        </Form>
      </div>
    </Container>
  );
};

export default EditProfilePage;
