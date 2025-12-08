# WYDO

WYDO, stands for `WYDO, You Drop Out?!`, is a small academic-performance predictor that estimates
your likelihood of dropping out in the next semester based on your recent grades and
course history. Feed it your last one or two semesters, and it returns a probability
along with a reasonable explanation of risk.

**In short**: it’s a slightly judgemental little oracle trying to warn you before your GPA launches itself into the abyss.\
Use it to stay on track, or at least to confirm your worst academic fears.

Don't let your parents down for your gross and poor performance as a college student!

## Features

- Predicts dropout risk using a trained Random Forest model.
- Accepts one or two recent semesters’ performance data.
- Clean, responsive frontend (React + Tailwind).
- Separate backend service (Flask API) hosted on PythonAnywhere.
- Loading states, auto-scrolling results, and simple UX flow.
- Tiered risk interpretation (low, medium, high) done fully on the frontend.
- Reproducible model training pipeline and preprocessed dataset.

## Instructions (How to Use)

1. **Enter your age**  
   Provide your current age (17–25). The model only behaves within that range.\
   Anyway, the semester input is optional, fill it to let you know how *old* you really are.

2. **Fill in your last one or two semesters**  
   For each semester, enter:
   - Total number of courses taken  
   - Number of courses passed  
   - GPA for that semester  

   The predictor works with one semester, but two semesters improve accuracy.

3. **Specify scholarship and debtor status**  
   Mark whether you are a scholarship holder or a UKT debtor. These are used as input features for the model.

4. **Click the Predict button**  
   After submitting, the app will:
   - Process your data  
   - Automatically scroll to the results section  
   - Show your dropout probability (0–100%)  
   - Display a risk category (low, medium, or high)  
   - Provide a brief explanation of the result

5. **Interpret the result responsibly**  
    The output is a statistical estimate, not a prophecy.\
    Or just ignore the result and carry on. It's your GPA, not mine.

This is our group project for _Discrete Math_ class, and we're hoping that it makes sense, if any.

<!--
## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
-->
