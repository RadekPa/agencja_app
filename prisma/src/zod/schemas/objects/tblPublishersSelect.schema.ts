import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPubISBNFindManySchema as tblPubISBNFindManySchema } from '../findManytblPubISBN.schema';
import { TblPublishersCountOutputTypeArgsObjectSchema as TblPublishersCountOutputTypeArgsObjectSchema } from './TblPublishersCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  PubID: z.boolean().optional(),
  PubName: z.boolean().optional(),
  PubAbb: z.boolean().optional(),
  ParentPubID: z.boolean().optional(),
  tblPubISBN: z.union([z.boolean(), z.lazy(() => tblPubISBNFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TblPublishersCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const tblPublishersSelectObjectSchema: z.ZodType<Prisma.tblPublishersSelect> = makeSchema() as unknown as z.ZodType<Prisma.tblPublishersSelect>;
export const tblPublishersSelectObjectZodSchema = makeSchema();
