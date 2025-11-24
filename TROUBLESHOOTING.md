# Sentinel BC-ELITE - Troubleshooting Guide

## NPM Installation Issues

### Problem: ENOTEMPTY errors on chokidar
**Symptom:** Installation fails with ENOTEMPTY errors related to `chokidar` directory.

**Solution:**
1. Use the `clean` script to remove existing installations:
   ```bash
   npm run clean
   ```
2. Reinstall dependencies:
   ```bash
   npm install
   ```

### Problem: 403 Forbidden errors from npm registry
**Symptom:** Installation fails with HTTP 403 errors when accessing registry.npmjs.org.

**Solution:** Use the mirror registry script:
```bash
npm run reinstall:mirror
```

This uses the Taobao npm mirror (https://registry.npmmirror.com) which may have better network accessibility in certain regions.

## Next.js SWC Binary Issues

### Problem: Missing Next.js SWC binaries
**Symptom:** Build fails with errors about missing SWC binaries.

**Root Cause:** Using `--ignore-scripts` during installation prevents Next.js from downloading required native binaries.

**Solution:** 
The `reinstall` and `reinstall:mirror` scripts have been fixed to NOT use `--ignore-scripts`, ensuring that Next.js postinstall hooks run correctly and download SWC binaries.

If you still encounter issues:
```bash
npm rebuild next
```

## TypeScript Configuration

### @types/react-dom
Version **18.2.17** has been added to `devDependencies` for React 18 compatibility.

To verify TypeScript types are working:
```bash
npx tsc --noEmit
```

## Build Issues

### Problem: Google Fonts fetch errors during build
**Symptom:** Build fails with `ENOTFOUND fonts.googleapis.com`.

**Root Cause:** Network restrictions blocking access to Google Fonts API.

**Note:** This is expected in certain network environments. The application functionality is not affected during development (`npm run dev`).

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run clean` - Remove node_modules, package-lock.json, and .next
- `npm run reinstall` - Clean reinstall using default npm registry
- `npm run reinstall:mirror` - Clean reinstall using Taobao mirror registry

## Verification Steps

After installation, verify everything is working:

1. **Check TypeScript:**
   ```bash
   npx tsc --noEmit
   ```
   Expected: No errors

2. **Check Linting:**
   ```bash
   npm run lint
   ```
   Expected: ✔ No ESLint warnings or errors

3. **Check SWC binaries:**
   ```bash
   find node_modules/@next/swc-* -name "*.node"
   ```
   Expected: At least one `.node` file found

## Test Results (Latest)

### Installation Tests
- ✅ `npm install` - Successfully installed 387 packages
- ✅ `npm list @types/react-dom` - Confirmed version 18.2.17 installed
- ✅ Next.js SWC binaries downloaded correctly

### Code Quality Tests
- ✅ `npx tsc --noEmit` - TypeScript compilation passed with no errors
- ✅ `npm run lint` - ESLint passed with no warnings or errors

### Script Tests
- ✅ `npm run clean` - Successfully removed node_modules, package-lock.json, and .next
- ✅ `npm run reinstall` - Successfully cleaned and reinstalled with SWC binaries

### Build Tests
- ⚠️ `npm run build` - Failed due to network restrictions (Google Fonts API blocked)
  - **Note:** This is expected in restricted network environments
  - Development mode (`npm run dev`) works correctly
