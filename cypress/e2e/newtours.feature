Feature: Watson Orchestration Verification

@Smoke1
Scenario: Watson Orchestration application start
Given Start Watson Orchestration application
Then Verify the title
#Then I should see web audit results

@Smoke
Scenario: Watson Orchestration application login
Given Start Watson Orchestration application
Then Verify the title
When Enter user name
And Click on continue button
And Enter Password
And Click on Login button
#Then I should see web audit results

