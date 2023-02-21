import axios from "axios";
import { checkEmailExist, submitUser } from "./auth.service";
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
    const result = await checkEmailExist("test@example.com");
    expect(result).toBe(true);
  });
  it("returns false when the email does not exist", async () => {
    const emailVerification = {
      smtp_check: false,
      mx_found: false,
    };
    axios.get.mockResolvedValue({ data: emailVerification });
    const result = await checkEmailExist("test@example.com");
    expect(result).toBe(false);
  });
  it("throws an error when the API call fails", async () => {
    axios.get.mockRejectedValue(new Error("API error"));
    await expect(checkEmailExist("test@example.com")).rejects.toThrow();
  });
});
describe("submitUser", () => {
  it("should submit user and return signed up user", async () => {
    const user = {
      firstName: "John Doe",
      email: "john.doe@example.com",
      lastName: "Doe",
    };
    const signedUpUser = { _id: 1, ...user };
    axios.post.mockResolvedValueOnce({ ...signedUpUser });

    const result = await submitUser({ ...user, password: "password123" });
    expect(axios.post).toHaveBeenCalledWith(
      expect.any(String),
      { ...user, password: "password123" },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    expect(result).toEqual(signedUpUser);
  });

  it("should throw an error if submitUser fails", async () => {
    const user = {
      name: "John Doe",
      email: "john.doe@example.com",
      password: "password123",
    };
    const error = new Error("Failed to submit user");
    axios.post.mockRejectedValueOnce(error);

    await expect(submitUser(user)).rejects.toThrow(error);
  });
});
