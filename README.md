# npm-ssl

## Usage

### Configure SSL Profiles

```
npm set ssl.profiles.NAME.registry https://your.private.registry/
npm set ssl.profiles.NAME.cafile /path/to/your-ca.crt
npm set ssl.profiles.NAME.keyfile /path/to/your-client-key.pem
npm set ssl.profiles.NAME.certfile /path/to/your-client-cert.crt
```

### Activate Profile

```
npm set ssl.current NAME
```

### Use `npm-ssl`

In order to apply an active profile, use `npm-ssl` instead of `npm`.

```
# Install from your private registry.
npm-ssl install
```

## Bash Completion

In ~/.bashrc

```
complete -F _npm_completion npm-ssl
```
