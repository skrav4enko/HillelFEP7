module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "extends": "airbnb-base",
    "rules": {
        "linebreak-style": [
            "error",
            "windows"
        ],
        "comma-dangle": [
            "warn",
            "never"
        ],
        "prefer-const": [
            "warn"
        ],
        "no-plusplus": [
            "error", { 
                "allowForLoopAfterthoughts": true 
            }
        ],
        "no-use-before-define": [
            "warn"
        ],
        "no-unused-vars": [
            "warn", {
                "args": "none" 
            }
        ],
        "max-len": [
            "error", {
                "ignoreTemplateLiterals": true,
                "ignoreComments": true 
            }
        ]
    }
}