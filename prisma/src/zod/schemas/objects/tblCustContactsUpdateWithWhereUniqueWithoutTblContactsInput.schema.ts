import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustContactsWhereUniqueInputObjectSchema as tblCustContactsWhereUniqueInputObjectSchema } from './tblCustContactsWhereUniqueInput.schema';
import { tblCustContactsUpdateWithoutTblContactsInputObjectSchema as tblCustContactsUpdateWithoutTblContactsInputObjectSchema } from './tblCustContactsUpdateWithoutTblContactsInput.schema';
import { tblCustContactsUncheckedUpdateWithoutTblContactsInputObjectSchema as tblCustContactsUncheckedUpdateWithoutTblContactsInputObjectSchema } from './tblCustContactsUncheckedUpdateWithoutTblContactsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustContactsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblCustContactsUpdateWithoutTblContactsInputObjectSchema), z.lazy(() => tblCustContactsUncheckedUpdateWithoutTblContactsInputObjectSchema)])
}).strict();
export const tblCustContactsUpdateWithWhereUniqueWithoutTblContactsInputObjectSchema: z.ZodType<Prisma.tblCustContactsUpdateWithWhereUniqueWithoutTblContactsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustContactsUpdateWithWhereUniqueWithoutTblContactsInput>;
export const tblCustContactsUpdateWithWhereUniqueWithoutTblContactsInputObjectZodSchema = makeSchema();
