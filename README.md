# electrical-appliances-status
The objective of this simple webpage is to log when there are change of status of electrical appliances.
The target layout is the following:

```markdown
 # [ICON of typical furniture of Area 1] AREA 1
    [ICON appliance 1 in area 1] [BUTTON 1] [BUTTON 2]

 # [ICON of typical furniture of Area 2] AREA 2
    [ICON appliance 1 in area 2] [BUTTON 1] [BUTTON 2]
    [ICON appliance 2 in area 2] [BUTTON 1] [BUTTON 2] [BUTTON 3]
    [ICON appliance 3 in area 2] [BUTTON 1] [BUTTON 2]
    [ICON appliance 4 in area 2] [BUTTON 1] [BUTTON 2] [BUTTON 3]

 # [ICON of typical furniture of Area 3] AREA 3
    [ICON appliance 1 in area 2] [BUTTON 1] [BUTTON 2]
    [ICON appliance 2 in area 2] [BUTTON 1] [BUTTON 2] [BUTTON 3]
    [ICON appliance 3 in area 2] [BUTTON 1] [BUTTON 2] [BUTTON 3] ... [BUTTON 8] [BUTTON 9] [BUTTON 10] [BUTTON 11]
```

Each button represent a state of the corresponding electrical appliance. 
Pushing the button is sending a POST request to log the change of status of the electrical appliances and the timestamp.