import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustContactsWhereUniqueInputObjectSchema as tblCustContactsWhereUniqueInputObjectSchema } from './tblCustContactsWhereUniqueInput.schema';
import { tblCustContactsUpdateWithoutTblCustomersInputObjectSchema as tblCustContactsUpdateWithoutTblCustomersInputObjectSchema } from './tblCustContactsUpdateWithoutTblCustomersInput.schema';
import { tblCustContactsUncheckedUpdateWithoutTblCustomersInputObjectSchema as tblCustContactsUncheckedUpdateWithoutTblCustomersInputObjectSchema } from './tblCustContactsUncheckedUpdateWithoutTblCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustContactsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblCustContactsUpdateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustContactsUncheckedUpdateWithoutTblCustomersInputObjectSchema)])
}).strict();
export const tblCustContactsUpdateWithWhereUniqueWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblCustContactsUpdateWithWhereUniqueWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustContactsUpdateWithWhereUniqueWithoutTblCustomersInput>;
export const tblCustContactsUpdateWithWhereUniqueWithoutTblCustomersInputObjectZodSchema = makeSchema();
