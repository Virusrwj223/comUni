import React, { useState } from "react";

async function rest(request, param, channel) {
  var api_dict = {
    1: (args) =>
      `http://localhost:3000/api/v2/questions/${args[0]}?chapter=${args[1]}`,
    2: (args) => `http://localhost:3000/api/v1/textbooks/${args[0]}`,
    3: (args) => `http://localhost:3000/api/v2/discussions/${args[0]}`,
    4: (args) => `http://localhost:3000/api/v1/questions/${args[0]}`,
    5: (args) => `http://localhost:3000/api/v1/textbooks/${args[0]}`,
    6: (args) => `http://localhost:3000/api/v1/questions`,
    7: (args) => `http://localhost:3000/api/v1/discussions`,
    8: (args) => `http://localhost:3000/api/v1/discussions/id=${args[0]}`,
    9: (args) => `http://localhost:3000/api/v2/accounts/${args[0]}`,
    10: (args) => `http://localhost:3000/api/v1/accounts`,
    11: (args) => `http://localhost:3000/api/v1/accounts/id=${args[0]}`,
  };
  if (request == "GET" || request == "DELETE") {
    try {
      const response = await fetch(api_dict[channel](param), {
        method: request,
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const json = await response.json();
        return [200, json];
      } else {
        const json = await response.json();
        return [500, json];
      }
    } catch (e) {
      return [400, e];
    }
  } else {
    try {
      const response = await fetch(api_dict[channel](param), {
        method: request,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(param[1]),
      });
      if (response.ok) {
        const json = await response.json();
        return [200, json];
      } else {
        const json = await response.json();
        return [500, json];
      }
    } catch (e) {
      return [400, e];
    }
  }
}

export default rest;
