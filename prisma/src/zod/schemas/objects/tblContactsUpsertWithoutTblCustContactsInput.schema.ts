import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblContactsUpdateWithoutTblCustContactsInputObjectSchema as tblContactsUpdateWithoutTblCustContactsInputObjectSchema } from './tblContactsUpdateWithoutTblCustContactsInput.schema';
import { tblContactsUncheckedUpdateWithoutTblCustContactsInputObjectSchema as tblContactsUncheckedUpdateWithoutTblCustContactsInputObjectSchema } from './tblContactsUncheckedUpdateWithoutTblCustContactsInput.schema';
import { tblContactsCreateWithoutTblCustContactsInputObjectSchema as tblContactsCreateWithoutTblCustContactsInputObjectSchema } from './tblContactsCreateWithoutTblCustContactsInput.schema';
import { tblContactsUncheckedCreateWithoutTblCustContactsInputObjectSchema as tblContactsUncheckedCreateWithoutTblCustContactsInputObjectSchema } from './tblContactsUncheckedCreateWithoutTblCustContactsInput.schema';
import { tblContactsWhereInputObjectSchema as tblContactsWhereInputObjectSchema } from './tblContactsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => tblContactsUpdateWithoutTblCustContactsInputObjectSchema), z.lazy(() => tblContactsUncheckedUpdateWithoutTblCustContactsInputObjectSchema)]),
  create: z.union([z.lazy(() => tblContactsCreateWithoutTblCustContactsInputObjectSchema), z.lazy(() => tblContactsUncheckedCreateWithoutTblCustContactsInputObjectSchema)]),
  where: z.lazy(() => tblContactsWhereInputObjectSchema).optional()
}).strict();
export const tblContactsUpsertWithoutTblCustContactsInputObjectSchema: z.ZodType<Prisma.tblContactsUpsertWithoutTblCustContactsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblContactsUpsertWithoutTblCustContactsInput>;
export const tblContactsUpsertWithoutTblCustContactsInputObjectZodSchema = makeSchema();
