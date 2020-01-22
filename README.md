# GitFeed

## Additional improvements:

- Saved credentials on localstorage. No need to sign in after restating the app.

## Nice-to-have improvements:

- Use OAuth instead of username:password auth.
- Animation during login prosess
- Shows onboarding, instead of login form directly.
-

## Timeline and Thought Process

### Tue, Jan 21

16:07 - 16:53

- Start reading and understanding the interview task
- Pretty confused with "login screen where user can enter their Github login" and "password screen where user can enter his Github password and a submit button"
- So do we authenticate the user manually and the user is expected to enter their username and password in our own text field?
- Check if Github API provides authentication using username and password
- Hmm yea they do. Okay no problem with the first and second requirement.
- Finish reading the rest of the interview task. Well I think we can do that.

19:05 - 19:41

- Read the interview task again
- Check the Github API authentication again. Test using curl.
- After testing with cURL. Got this warning on email:
  "You recently used a password to access an endpoint through the GitHub API using curl/7.54.0. We will deprecate basic authentication using password to this endpoint soon:
  https://api.github.com/
  We recommend using a personal access token (PAT)"
- Hmm, yea username and password authentication is not recommended. Normally we do OAuth authentication. Can we use OAuth instead of typing username and password in our app?
- Other than that, if we use username and password plainly and we save it on localstorage, it's a security problem because hacker can acess the saved username and password. If we use OAuth, then it's not a problem because we save access_token not the whole username and password.
- Is it fast to implement the OAuth? Do we need a server for the redirect uri? (I've only built OAuth authentication on server rendered apps, Rails)
- I think Expo provides some OAuth library. Let's check that.
- Hmm yea Expo provides some abstraction for OAuth. Now let's get started.
- When starting new React Native application, the first thing we have to decide is whether to use Expo or not.
- Expo has advantage: lot of abstractions for faster dev time, OTA code update, and easier Android and iOS build
- Expo disadvantages: big app size! My lastest simple RN app was 22 MB using Expo :(, can't use library that need to change native code.
- Because for now our app need lot of abstractions, and there's no requirement that needs native code, so we will use expo yay. Anddd expo will provide a navigation structure using react-navigation, so it would be faster to bootstrap our app.
- Talking about navigation, I prefer react-native-navigation, because it's faster and feels smoother. But for this app I think it's good enough to use react-navigation

19:42 - 20:26

- Let's generate our app. But now we have to decide what we should name our app. Hmm so our app shows the git updates of a repo. GitUpdate maybe? No fun. GitFeed? I like it. Let's search on google to see if there's any project with that name
- Well there's some project but no big one. GitFeed it is!
- Initiate app using expo.
- Move our timeline note from simplenote to readme in the expo and do first commit.
- Well I have ton of ideas how to improve the app. But for now let's keep it simple and release v1 that fulfill all the mandatory requirement.
- First, let's do the switch navigator that checks whether the user is authenticated or not, if not, then redirects user to Sign in page. And while the app is checking, shows loading spinner.
- Let's use hook instead of Class. Because, why not. It's a new project after all.
- Now we make LoginScreen, and MainScreen, and try to make AuthLoadingScreen randomly go to either login screen, before we implement the real logged in checking mechanism, to get sense of the AuthLoadingScreen.
- Let's take a breakkk to meet someone.

### Wed, Jan 22

03:22 - 04:28

- Okay let's make the SignInScreen to actually try to sign in.
- Even tho yesterday we planned to use OAuth, I think it's more straightforward to use plain username:password authentication for the v1, and see if we can switch to OAuth later if we have time. Hope the username:password authentication doesn't get deprecated during the testing period haha.
- Well we need a UI library. I'll use react-native-paper again as I had good experience with it, compared to NativeBase.
- We also need to start thinking about colors and theme. Let's use some color pallete from Refactoring UI.
- Why do we need to separate the input password into different steps? :(
- Okay no big deal. Maybe in the future we could validate the username first with the Github API first, before going to the password, like the UX of Tokopedia.
- We could add animation during the login flow in the future.
- So for now our auth flow is: user filled username and password; we authenticate to the API; if the credential is valid, save it to localStorage for future use. Well there's security issue with saving password, but that's the requirement for v1.
- In day job I'd communicate the security problem with the PM, tell them about the alternative which is using OAuth (and need server for this), so maybe the specification could change.

04:57 - 05:42

- Let's do the API call and try to authenticate.
- We'll use axios, as it's the library I'm most familiar with. We'll use REST instead of GraphQL too because I'm much more familiar with REST, and so far they do the jobs well.
- Whelp. There's problem on lastest axios version, v0.19.1, when used in [Expo environment](https://github.com/axios/axios/issues/2235). Downgrading to v0.18.0 solves it.

08:02 - 08:47

- Implementing the part where the user provides correct credentials
- Adding layout of MainNavigator, RepoListScreen, and RepoDetailsScreen

09:19 - 09:58

- Want to continue to finish RepoListScreen and RepoDetailsScreen, but it's PITA if I have to login everytime I refresh the app. So we'll try to save our credential to localStorage, so the user don't need to login whenever they open the app. If the user click the logout, we'll clear the credential from the localStorage, and the user have to login again.
- Add NavigationService to navigate from outside screen or components.
