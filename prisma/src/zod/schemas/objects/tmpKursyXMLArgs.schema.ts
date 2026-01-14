import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tmpKursyXMLSelectObjectSchema as tmpKursyXMLSelectObjectSchema } from './tmpKursyXMLSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => tmpKursyXMLSelectObjectSchema).optional()
}).strict();
export const tmpKursyXMLArgsObjectSchema = makeSchema();
export const tmpKursyXMLArgsObjectZodSchema = makeSchema();
