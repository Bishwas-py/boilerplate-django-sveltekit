# Workflow
- Scripting
- HTML and Components
- Styling

## Scripting
- [Importing files](#Importing files hierarchy)
- Making variables
- Making functions
- Exporting variables and functions
- Using variables and functions

## HTML and Components
- Making components
- Using components
- Styling components
- Using components in other components

## Styling
- Applying styles in `style` tags


### Importing files hierarchy

#### Font Awesome Element
```typescript
import Fa from "svelte-fa";
import {faPlus, faSearch} from "@fortawesome/free-solid-svg-icons";
```

#### Svelte Libs
```typescript
import {page} from "$app/stores";
```

#### Internal components
```typescript
import Logo from "$lib/nav/items/Logo.svelte";
import Modal from "$lib/dash/components/Modal.svelte";
```

#### Types and interfaces
```
import type {ShortURL} from "$lib/interfaces/handler";
```

### Internal dependencies
```typescript
import {shortURLS} from "$lib/dash/store.js";
```
