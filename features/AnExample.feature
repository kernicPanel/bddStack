Feature: This is an example feature
  In order to learn Cucumber
  As a developer
  I want to make this feature pass

  # Scenario: wrote my first scenario
  #   Given a variable set to 1
  #   When I increment the variable by 2
  #   Then the variable should contain 3

  # Scenario: CSS
  #   Given I go to "/"
  #   Then the "Main title" should have "font size" of "150px"
  #   And the "Main title" should have "color" of "#FF6600"
  #   And run

  Scenario: find cukes.info
    Given I go to "/"
    Then I see text with "Résultats de recherche, sucker"
    Then I break test
  #   Then I search for "truc"
  #   Then I should be on "http://www.internethic.com/internethic/search/(SearchText)/Cucumber+BDD"
    # Then I see a link to "/content/view/sitemap/2"
  #   Then I see text with "Résultats de recherche, sucker"
    And run