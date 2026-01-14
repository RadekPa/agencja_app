import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustContactsWhereUniqueInputObjectSchema as tblCustContactsWhereUniqueInputObjectSchema } from './tblCustContactsWhereUniqueInput.schema';
import { tblCustContactsUpdateWithoutTblContactsInputObjectSchema as tblCustContactsUpdateWithoutTblContactsInputObjectSchema } from './tblCustContactsUpdateWithoutTblContactsInput.schema';
import { tblCustContactsUncheckedUpdateWithoutTblContactsInputObjectSchema as tblCustContactsUncheckedUpdateWithoutTblContactsInputObjectSchema } from './tblCustContactsUncheckedUpdateWithoutTblContactsInput.schema';
import { tblCustContactsCreateWithoutTblContactsInputObjectSchema as tblCustContactsCreateWithoutTblContactsInputObjectSchema } from './tblCustContactsCreateWithoutTblContactsInput.schema';
import { tblCustContactsUncheckedCreateWithoutTblContactsInputObjectSchema as tblCustContactsUncheckedCreateWithoutTblContactsInputObjectSchema } from './tblCustContactsUncheckedCreateWithoutTblContactsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustContactsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblCustContactsUpdateWithoutTblContactsInputObjectSchema), z.lazy(() => tblCustContactsUncheckedUpdateWithoutTblContactsInputObjectSchema)]),
  create: z.union([z.lazy(() => tblCustContactsCreateWithoutTblContactsInputObjectSchema), z.lazy(() => tblCustContactsUncheckedCreateWithoutTblContactsInputObjectSchema)])
}).strict();
export const tblCustContactsUpsertWithWhereUniqueWithoutTblContactsInputObjectSchema: z.ZodType<Prisma.tblCustContactsUpsertWithWhereUniqueWithoutTblContactsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustContactsUpsertWithWhereUniqueWithoutTblContactsInput>;
export const tblCustContactsUpsertWithWhereUniqueWithoutTblContactsInputObjectZodSchema = makeSchema();
