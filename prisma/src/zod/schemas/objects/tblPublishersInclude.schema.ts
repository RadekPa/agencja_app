import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPubISBNFindManySchema as tblPubISBNFindManySchema } from '../findManytblPubISBN.schema';
import { TblPublishersCountOutputTypeArgsObjectSchema as TblPublishersCountOutputTypeArgsObjectSchema } from './TblPublishersCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  tblPubISBN: z.union([z.boolean(), z.lazy(() => tblPubISBNFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TblPublishersCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const tblPublishersIncludeObjectSchema: z.ZodType<Prisma.tblPublishersInclude> = makeSchema() as unknown as z.ZodType<Prisma.tblPublishersInclude>;
export const tblPublishersIncludeObjectZodSchema = makeSchema();
