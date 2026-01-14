import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsArgsObjectSchema as tblAgreementsArgsObjectSchema } from './tblAgreementsArgs.schema'

const makeSchema = () => z.object({
  PubLocalID: z.boolean().optional(),
  AgrID: z.boolean().optional(),
  LocalTitle: z.boolean().optional(),
  PubDate: z.boolean().optional(),
  LocalISBN: z.boolean().optional(),
  Printrun: z.boolean().optional(),
  LocalEdition: z.boolean().optional(),
  tblAgreements: z.union([z.boolean(), z.lazy(() => tblAgreementsArgsObjectSchema)]).optional()
}).strict();
export const tblPubLocalSelectObjectSchema: z.ZodType<Prisma.tblPubLocalSelect> = makeSchema() as unknown as z.ZodType<Prisma.tblPubLocalSelect>;
export const tblPubLocalSelectObjectZodSchema = makeSchema();
