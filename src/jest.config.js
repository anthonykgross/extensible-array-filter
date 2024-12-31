module.exports = {
    preset: "ts-jest",
    testEnvironment: 'node',
    collectCoverage: true,
    collectCoverageFrom: ['./src/**'],
    coverageReporters: ['html', 'text', 'text-summary', 'json-summary'],
    coverageDirectory: './coverage',
};
