// import express from "express";

const b = {
  average: (x, y) => {
    return (x + y) / 2;
  },
  percent: (x, y) => {
    return (x / y) * 100;
  },
};

module.exports = { a, b };
