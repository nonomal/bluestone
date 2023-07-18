#!/usr/bin/env sh

KEY_CHAIN=build.keychain
CERTIFICATE_P12=certificate.p12
CERTIFICATE_INSTALL_P12=certificate_install.p12

# Recreate the certificate from the secure environment variable
echo $CERTIFICATE_OSX_APPLICATION | base64 --decode > $CERTIFICATE_P12

#create a keychain
security create-keychain -p actions $KEY_CHAIN

# Make the keychain the default so identities are found
security default-keychain -s $KEY_CHAIN

# Unlock the keychain
security unlock-keychain -p actions $KEY_CHAIN

security import $CERTIFICATE_P12 -k $KEY_CHAIN -P $CERTIFICATE_PASSWORD -T /usr/bin/codesign;

security set-key-partition-list -S apple-tool:,apple: -s -k actions $KEY_CHAIN

# mas
echo $CERTIFICATE_OSX_INSTALL | base64 --decode > $CERTIFICATE_INSTALL_P12

security create-keychain -p actions $KEY_CHAIN

# Make the keychain the default so identities are found
security default-keychain -s $KEY_CHAIN

# Unlock the keychain
security unlock-keychain -p actions $KEY_CHAIN

security import $CERTIFICATE_INSTALL_P12 -k $KEY_CHAIN -P $INSTALL_PASSWORD -T /usr/bin/codesign;

security set-key-partition-list -S apple-tool:,apple: -s -k actions $KEY_CHAIN
# remove certs
rm -fr *.p12