module.exports = {
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/fileMock.js",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/fileMock.js",
    testEnvironment: "jsdom",
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Add this line
};
