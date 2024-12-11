import designTokens from '@gemeentenijmegen/design-tokens/dist/tokens.json';
import { getTokenByPath } from '../Tokens';

export const DesignTokensTable = ({ tokenPaths }) => {
  const tokens = tokenPaths
    .split(',')
    .map((tokenPath) => {
      return Object.values(getTokenByPath({ obj: designTokens, path: tokenPath }));
    })
    .flat(1);
  return (
    <table>
      <thead>
        <tr>
          <th>Design token name</th>
          <th>Design token value</th>
          <th>Design token value original</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {tokens.map((token) => {
          console.log(token);
          return (
            <tr key={token.name}>
              <td>
                <code>{token.path.join('.')}</code>
              </td>
              <td>{token.value}</td>
              <td>{token.original.value}</td>
              <td>{token.type}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
