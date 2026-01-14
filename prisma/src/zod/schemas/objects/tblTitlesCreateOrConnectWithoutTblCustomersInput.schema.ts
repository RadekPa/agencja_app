import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesWhereUniqueInputObjectSchema as tblTitlesWhereUniqueInputObjectSchema } from './tblTitlesWhereUniqueInput.schema';
import { tblTitlesCreateWithoutTblCustomersInputObjectSchema as tblTitlesCreateWithoutTblCustomersInputObjectSchema } from './tblTitlesCreateWithoutTblCustomersInput.schema';
import { tblTitlesUncheckedCreateWithoutTblCustomersInputObjectSchema as tblTitlesUncheckedCreateWithoutTblCustomersInputObjectSchema } from './tblTitlesUncheckedCreateWithoutTblCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitlesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblTitlesCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblTitlesUncheckedCreateWithoutTblCustomersInputObjectSchema)])
}).strict();
export const tblTitlesCreateOrConnectWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblTitlesCreateOrConnectWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesCreateOrConnectWithoutTblCustomersInput>;
export const tblTitlesCreateOrConnectWithoutTblCustomersInputObjectZodSchema = makeSchema();
