import { Button, SafeAreaView, ScrollView, Text, View } from 'react-native';
import type {
  GetProfileResponse,
  NaverLoginResponse,
} from '@react-native-seoul/naver-login';
import NaverLogin from '@react-native-seoul/naver-login';
import React, { type ReactElement, useEffect, useState } from 'react';

const Gap = (): ReactElement => <View style={{ marginTop: 24 }} />;
const ResponseJsonText = ({
  json = {},
  name,
}: {
  json?: object;
  name: string;
}): ReactElement => (
  <View
    style={{
      padding: 12,
      borderRadius: 16,
      borderWidth: 1,
      backgroundColor: '#242c3d',
    }}
  >
    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
      {name}
    </Text>
    <Text style={{ color: 'white', fontSize: 13, lineHeight: 20 }}>
      {JSON.stringify(json, null, 4)}
    </Text>
  </View>
);

const consumerKey = '18XLfToQbYAywdZuhuNz';
const consumerSecret = 'k0C3kCR9Mw';
const appName = 'testapp';

const serviceUrlScheme = 'navertest';

const NaverAPIScreen = (): ReactElement => {
  useEffect(() => {
    NaverLogin.initialize({
      appName,
      consumerKey,
      consumerSecret,
      serviceUrlSchemeIOS: serviceUrlScheme,
      disableNaverAppAuthIOS: true,
    });
  }, []);

  const [success, setSuccessResponse] =
    useState<NaverLoginResponse['successResponse']>();

  const [failure, setFailureResponse] =
    useState<NaverLoginResponse['failureResponse']>();
  const [getProfileRes, setGetProfileRes] = useState<GetProfileResponse>();

  const login = async (): Promise<void> => {
    const { failureResponse, successResponse } = await NaverLogin.login();
    setSuccessResponse(successResponse);
    setFailureResponse(failureResponse);
  };

  const logout = async (): Promise<void> => {
    try {
      await NaverLogin.logout();
      setSuccessResponse(undefined);
      setFailureResponse(undefined);
      setGetProfileRes(undefined);
    } catch (e) {
      console.error(e);
    }
  };

  const getProfile = async (): Promise<void> => {
    try {
      const profileResult = await NaverLogin.getProfile(success!.accessToken);
      setGetProfileRes(profileResult);
    } catch (e) {
      setGetProfileRes(undefined);
    }
  };


  return (
    <SafeAreaView
      style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
    >
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1, padding: 24 }}
      >
        <Button title={'Login'} onPress={login} />
        <Gap />
        <Button title={'Logout'} onPress={logout} />
        <Gap />
        {success ? (
          <>
            <Button title="Get Profile" onPress={getProfile} />
            <Gap />
          </>
        ) : null}
        <Gap />
        {failure ? <ResponseJsonText name={'Failure'} json={failure} /> : null}
        <Gap />
        {getProfileRes ? (
          <ResponseJsonText name={'GetProfile'} json={getProfileRes} />
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default NaverAPIScreen;