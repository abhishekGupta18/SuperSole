import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/authUtils";

/**
 * All the routes related to Address are present here.
 * These are private routes.
 * Client needs to add "authorization" header with JWT token in it to access it.
 * */

/**
 * This handler handles getting items to user's address.
 * send GET Request at /api/user/addresses
 * */

export const getAddressesHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  if (!userId) {
    return new Response(
      404,
      {},
      {
        errors: ["The email you entered is not Registered. Not Found error"],
      }
    );
  }
  const userAddresses = schema.users.findBy({ _id: userId }).address;
  return new Response(200, {}, { address: userAddresses });
};

/**
 * This handler handles adding  user's address.
 * send POST Request at /api/user/address
 * body contains {product}
 * */

export const addNewAddressHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      return new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    const userAddresses = schema.users.findBy({ _id: userId }).address;
    const { address } = JSON.parse(request.requestBody);
    userAddresses.push({
      ...address,
      createdAt: formatDate(),
      updatedAt: formatDate(),
    });
    this.db.users.update({ _id: userId }, { address: userAddresses });
    return new Response(201, {}, { address: userAddresses });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles removing address from user.
 * send DELETE Request at /api/user/:addressId
 * body contains {product}
 * */

export const removeAddressHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      return new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    let userAddresses = schema.users.findBy({ _id: userId }).address;
    const addressId = request.params.addressId;
    userAddresses = userAddresses.filter((item) => item._id !== addressId);
    this.db.users.update({ _id: userId }, { address: userAddresses });
    return new Response(200, {}, { address: userAddresses });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles edit an address to user.
 * send POST request at api/user/address/:addressId
 * body contains { address }
 */

export const editAddressHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }

    const addressId = request.params.addressId;
    const { address } = JSON.parse(request.requestBody);

    let userAddresses = schema.users.findBy({ _id: userId }).address;

    userAddresses = userAddresses.map((item) =>
      item._id === addressId ? address : item
    );

    this.db.users.update({ _id: userId }, { address: userAddresses });
    return new Response(201, {}, { address: userAddresses });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
