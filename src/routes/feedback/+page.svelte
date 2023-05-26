<script>
	import DiscordReporting from "../../lib/DiscordReporting";

    let recommendApp = '';
    let displayFeedbackPublicly = '';
    let displayReview = false;
    let displayFeatureRequest = false;
    let displayOpenEndedFeedback = false;
    let displayQuestions = false;
  
    function handleRecommendApp(event) {
      recommendApp = event.target.value;
    }
  
    function handleDisplayFeedbackPublicly(event) {
      displayFeedbackPublicly = event.target.value;
    }
  
    function handleDisplayOption(option) {
      switch (option) {
        case 'review':
          displayReview = !displayReview;
          break;
        case 'featureRequest':
          displayFeatureRequest = !displayFeatureRequest;
          break;
        case 'openEndedFeedback':
          displayOpenEndedFeedback = !displayOpenEndedFeedback;
          break;
        case 'questions':
          displayQuestions = !displayQuestions;
          break;
      }
    }



// <DiscordReporting {reportData} />

// function handleSubmit {
//     DiscordReporting.handleSubmit
// }



  </script>
  
  <style>
    .feedback-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
      max-width: 400px;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  
    .feedback-form label {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }
  
    .feedback-form input[type="checkbox"] {
      margin-right: 5px;
    }
  
    .feedback-form button[type="submit"] {
      padding: 10px 20px;
      background-color: #337ab7;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease-in-out;
    }
  
    .feedback-form button[type="submit"]:hover {
      background-color: #23527c;
    }
  
    .feedback-form textarea {
      width: 100%;
      height: 100px;
      resize: vertical;
    }
  
    .feedback-form .rating-container {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }
  
    .feedback-form .rating-container .star {
      cursor: pointer;
      margin-right: 5px;
      font-size: 18px;
      color: #ccc;
      transition: color 0.3s ease-in-out;
    }
  
    .feedback-form .rating-container .star:hover,
    .feedback-form .rating-container .star.active {
      color: #ffce00;
    }
  </style>
  
  <form class="feedback-form">
    <h2>Feedback Form</h2>
  
    <label>
      Name:
      <input type="text" placeholder="Your name">
    </label>
  
    <label>
      Email:
      <input type="email" placeholder="Your email">
    </label>
  
    <div class="checkbox-group">
      <p>Would you recommend the app?</p>
      <label>
        <input type="radio" value="yes" bind:group={recommendApp} on:change={handleRecommendApp}>
        Yes
      </label>
      <label>
        <input type="radio" value="no" bind:group={recommendApp} on:change={handleRecommendApp}>
        No
      </label>
    </div>
  
    <div class="checkbox-group">
      <p>Can we display this feedback publicly?</p>
      <label>
        <input type="radio" value="yes" bind:group={displayFeedbackPublicly} on:change={handleDisplayFeedbackPublicly}>
        Yes
      </label>
      <label>
        <input type="radio" value="no" bind:group={displayFeedbackPublicly} on:change={handleDisplayFeedbackPublicly}>
        No
      </label>
    </div>
  
    <div>
      <p>Select the feedback you'd like to provide:</p>
      <label>
        <input type="checkbox" on:change={() => handleDisplayOption('review')}>
        Review
      </label>
      <label>
        <input type="checkbox" on:change={() => handleDisplayOption('featureRequest')}>
        Feature Request
      </label>
      <label>
        <input type="checkbox" on:change={() => handleDisplayOption('openEndedFeedback')}>
        Open-ended Feedback
      </label>
      <label>
        <input type="checkbox" on:change={() => handleDisplayOption('questions')}>
        Questions
      </label>
    </div>
  
    <!-- Display Review -->
    {#if displayReview}
    <div>
      <label>
        Rating (1-5):
        <div class="rating-container">
          <span class="star">★</span>
          <span class="star">★</span>
          <span class="star">★</span>
          <span class="star">★</span>
          <span class="star">★</span>
        </div>
      </label>
  
      <label>
        Comment:
        <textarea></textarea>
      </label>
    </div>
    {/if}
  
    <!-- Display Feature Request -->
    {#if displayFeatureRequest}
    <div>
      <label>
        Category:
        <select>
          <option value="">Select a category</option>
          <option value="User Interface (UI) Improvements">User Interface (UI) Improvements</option>
          <option value="New Functionality">New Functionality</option>
          <option value="Performance Optimization">Performance Optimization</option>
          <option value="Integration with Third-Party Services">Integration with Third-Party Services</option>
          <option value="Customization Options">Customization Options</option>
          <option value="Accessibility Enhancements">Accessibility Enhancements</option>
          <option value="Security and Privacy Features">Security and Privacy Features</option>
          <option value="Collaboration and Sharing">Collaboration and Sharing</option>
          <option value="Other">Other</option>
        </select>
      </label>
  
      <label>
        Idea:
        <textarea></textarea>
      </label>
    </div>
    {/if}
  
    <!-- Display Open-ended Feedback -->
    {#if displayOpenEndedFeedback}
    <div>
      <label>
        Feedback:
        <textarea></textarea>
      </label>
    </div>
    {/if}
  
    <!-- Display Questions -->
    {#if displayQuestions}
    <div>
      <label>
        Questions:
        <textarea></textarea>
      </label>
    </div>
    {/if}
  
    <button type="submit">Submit</button>
  </form>
  