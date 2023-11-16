Feature: Watson Orchestration Verification

@Smoke
Scenario: Watson Orchestration application start
Given Start Watson Orchestration application
Then Verify the title
#Then I should see web audit results

@Smoke
Scenario: Watson Orchestration application login
Given Start Watson Orchestration application
Then Verify the title
When Enter user name
#Then I should see web audit results

