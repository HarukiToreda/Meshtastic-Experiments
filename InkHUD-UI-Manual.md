---
layout: default
title: InkHUD UI Manual
permalink: /InkHUD-UI-Manual/
---

# InkHUD UI Manual

## Main Menu Structure
The **InkHUD UI** features a menu system that allows users to configure display settings, manage notifications, and access messages efficiently. Below is a breakdown of its functions.

---

## **Menu**
   The **Menu** provides access to different settings and options to configure the display and message preferences.

### **Options (InkHUD Settings)**
   Customize the InkHUD display behavior.

   #### **Applet (Select Screen to Display)**
   Choose what type of data appears on the screen.

   - **All Messages** – Displays the last heard message from DMs or channels.  
   - **DMs** – Shows the last received direct message.  
   - **Channel 0** – Displays all recent messages on Channel 0 in a threaded format.  
   - **Channel 1** – Displays all recent messages on Channel 1 in a threaded format.  
   - **Positions** – Shows the Node Map Position screen, with "X" markers for locations.  
   - **Recents List** – Displays a list of last heard nodes within a specified time frame.  
   - **Heard** – Lists all nodes heard within a certain time period.  
   - **Exit** – Closes the menu screen.

   #### **Auto-Show (Auto-Switch to New Data)**
   Automatically displays the selected screen when new data is received.

   - **All Messages**  
   - **DMs**  
   - **Channel 0**  
   - **Channel 1**  
   - **Positions**  
   - **Recents List**  
   - **Heard**  
   - **Exit** – Closes the menu screen.

   #### **Recent Duration (Filter Recents List by Time)**
   Set the duration for filtering recently heard nodes when **Recents List** is selected.

   - **2 Minutes**  
   - **5 Minutes**  
   - **10 Minutes**  
   - **30 Minutes**  
   - **60 Minutes**  
   - **120 Minutes**  

   #### **Layout**
   Splits the screen into different sections for improved data visualization.

   #### **Rotate**
   Rotates the screen clockwise for different orientations.

   #### **Notification**
   Enables a notification banner when a new message is received.

   #### **Battery Icon**
   Displays the battery level on all screens.

   #### **Exit**
   Closes the **Options** menu.

---

## **Shutdown**
   Puts the device into **Deep Sleep** while saving all current settings and messages.

---

## **Exit**
   Closes the menu screen.

---

### **InkHUD UI Menu Structure (Tree View)**

Menu  
 ├── Options (InkHUD Settings)  
 │   ├── Applet (Type of screens data to display)  
 │   │   ├── All Messages  
 │   │   ├── DMs  
 │   │   ├── Channel 0  
 │   │   ├── Channel 1  
 │   │   ├── Positions  
 │   │   ├── Recents List  
 │   │   ├── Heard  
 │   │   ├── Exit  
 │   ├── Auto-Show (Automatically switch to new data screen)  
 │   │   ├── All Messages  
 │   │   ├── DMs  
 │   │   ├── Channel 0  
 │   │   ├── Channel 1  
 │   │   ├── Positions  
 │   │   ├── Recents List  
 │   │   ├── Heard  
 │   │   ├── Exit  
 │   ├── Recent Duration (Filter Recents List by time)  
 │   │   ├── 2 Mins  
 │   │   ├── 5 Mins  
 │   │   ├── 10 Mins  
 │   │   ├── 30 Mins  
 │   │   ├── 60 Mins  
 │   │   ├── 120 Mins  
 │   ├── Layout  
 │   ├── Rotate  
 │   ├── Notification  
 │   ├── Battery Icon  
 │   ├── Exit  
 ├── Shutdown (Deep sleep mode, saves settings/messages)  
 ├── Exit (Close menu screen)  

---



