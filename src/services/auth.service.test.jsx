import axios from "axios";
import { checkEmailExist, submitUser } from "./auth.service";
import { TestingConstants } from "../enums/testing-constants";
jest.mock("axios", () => ({
  get: jest.fn(() => Promise.resolve({ data: {} })),
  post: jest.fn(() => Promise.resolve({ data: {} })),
}));

describe("getUserInfo", () => {
  it("returns true when the email exists", async () => {
    const emailVerification = {
      smtp_check: true,
      mx_found: true,
    };
    axios.get.mockResolvedValue({ data: emailVerification });
    const result = await checkEmailExist(TestingConstants.mailExists);
    expect(result).toBe(true);
  });
  it("returns false when the email does not exist", async () => {
    const emailVerification = {
      smtp_check: false,
      mx_found: false,
    };
    axios.get.mockResolvedValue({ data: emailVerification });
    const result = await checkEmailExist(TestingConstants.mailDoesNotExists);
    expect(result).toBe(false);
  });
  it("throws an error when the API call fails", async () => {
    axios.get.mockRejectedValue(new Error("API error"));
    await expect(
      checkEmailExist(TestingConstants.mailDoesNotExists)
    ).rejects.toThrow();
  });
});
describe("submitUser", () => {
  it("should submit user and return signed up user", async () => {
    const user = {
      firstName: TestingConstants.fName,
      email: TestingConstants.email,
      lastName: TestingConstants.lName,
    };
    const signedUpUser = { _id: 1, ...user };
    axios.post.mockResolvedValueOnce({ ...signedUpUser });

    const result = await submitUser({
      ...user,
      password: TestingConstants.password,
    });
    expect(axios.post).toHaveBeenCalledWith(
      expect.any(String),
      { ...user, password: TestingConstants.password },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    expect(result).toEqual(signedUpUser);
  });

  it("should throw an error if submitUser fails", async () => {
    const user = {
      name: TestingConstants.name,
      email: TestingConstants.email,
      password: TestingConstants.password,
    };
    const error = new Error("Failed to submit user");
    axios.post.mockRejectedValueOnce(error);

    await expect(submitUser(user)).rejects.toThrow(error);
  });
});
