import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPublishersArgsObjectSchema as tblPublishersArgsObjectSchema } from './tblPublishersArgs.schema'

const makeSchema = () => z.object({
  tblPublishers: z.union([z.boolean(), z.lazy(() => tblPublishersArgsObjectSchema)]).optional()
}).strict();
export const tblPubISBNIncludeObjectSchema: z.ZodType<Prisma.tblPubISBNInclude> = makeSchema() as unknown as z.ZodType<Prisma.tblPubISBNInclude>;
export const tblPubISBNIncludeObjectZodSchema = makeSchema();
