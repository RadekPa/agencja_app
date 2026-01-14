import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesCreateWithoutTblCustomersInputObjectSchema as tblTitlesCreateWithoutTblCustomersInputObjectSchema } from './tblTitlesCreateWithoutTblCustomersInput.schema';
import { tblTitlesUncheckedCreateWithoutTblCustomersInputObjectSchema as tblTitlesUncheckedCreateWithoutTblCustomersInputObjectSchema } from './tblTitlesUncheckedCreateWithoutTblCustomersInput.schema';
import { tblTitlesCreateOrConnectWithoutTblCustomersInputObjectSchema as tblTitlesCreateOrConnectWithoutTblCustomersInputObjectSchema } from './tblTitlesCreateOrConnectWithoutTblCustomersInput.schema';
import { tblTitlesCreateManyTblCustomersInputEnvelopeObjectSchema as tblTitlesCreateManyTblCustomersInputEnvelopeObjectSchema } from './tblTitlesCreateManyTblCustomersInputEnvelope.schema';
import { tblTitlesWhereUniqueInputObjectSchema as tblTitlesWhereUniqueInputObjectSchema } from './tblTitlesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblTitlesCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblTitlesCreateWithoutTblCustomersInputObjectSchema).array(), z.lazy(() => tblTitlesUncheckedCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblTitlesUncheckedCreateWithoutTblCustomersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblTitlesCreateOrConnectWithoutTblCustomersInputObjectSchema), z.lazy(() => tblTitlesCreateOrConnectWithoutTblCustomersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblTitlesCreateManyTblCustomersInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblTitlesWhereUniqueInputObjectSchema), z.lazy(() => tblTitlesWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblTitlesCreateNestedManyWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblTitlesCreateNestedManyWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesCreateNestedManyWithoutTblCustomersInput>;
export const tblTitlesCreateNestedManyWithoutTblCustomersInputObjectZodSchema = makeSchema();
