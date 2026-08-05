---
layout: post
title: Mapping Out Which Bin Decision Tree
date: 2025-07-21 10:25 BST
categories: [WhichBin]
tags: [apps]
---

The logical flow for the Which Bin app ended up being much more complicated than I imagined when setting out to build the app.

This flowchart captures all the decision branches users can take, from first launch through ongoing app usage, including edge cases like permission denial, GPS timeout, location validation, and error recovery scenarios.

![Flowchart of the Which Bin app decision tree from launch through onboarding, location validation, and main navigation][image-1]

## Key Decision Points & User Paths:

### 🚀 App Launch Flow
- ​**Entry Point**​: App determines if user has confirmed address
- ​**Two Main Branches**​: Existing users go to main app, new users see welcome screen

### 📱 Onboarding Flow
1. **Welcome Screen** → User taps "Get Started"
2. ​**Location Permission Handling**​:
	- Not determined → Show permission request
	- Already denied/restricted → Show denied screen with manual entry option
	- Already granted → Skip to GPS resolution
3. ​**GPS Resolution with 15-Second Timeout**​:
	- Success within 15s → Location validation
	- Timeout → Allow manual entry
	- Error → Permission denied path
4. ​**Location Validation (Graduated)**​:
	- **Within Guildford Borough** → Address confirmation screen
	- **Outside Guildford but in UK** → Outside service area screen
	- **Outside UK** → International outside service area screen
5. ​**Address Confirmation**​:
	- Show loading spinner while data loads
	- Display map \+ postcode when ready
	- WebView address selection
	- Store address with UPRN
6. **Completion Screen** → "Start Using WhichBin" → Main app

### ⚙️ Settings & Manual Postcode Entry
- Manual postcode entry from outside service area
- Settings access from main app
- Postcode validation and updates
- Full data reset option (returns to welcome screen)

### 🏠 Main App Navigation
- **Bin Schedule Display** (primary interface)
- ​**User Actions**​:
	- Settings access
	- Location tap → Settings with postcode focus
	- Pull to refresh collection data
	- View collection details
- **Error Handling** with retry options

## 🔄 Key Features Highlighted:
1. **15-second GPS timeout** with automatic fallback
2. **Graduated location validation** (Guildford → UK → International)
3. **Loading spinners** during address data resolution
4. **Manual entry options** at multiple decision points
5. **Data reset functionality** that returns users to onboarding
6. **Error recovery paths** throughout the app

[image-1]:	/assets/img/2025-07-21-mapping-out-which-bin-decision-tree/whichbin-mermaid.png