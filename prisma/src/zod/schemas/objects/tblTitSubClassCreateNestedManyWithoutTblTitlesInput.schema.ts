import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitSubClassCreateWithoutTblTitlesInputObjectSchema as tblTitSubClassCreateWithoutTblTitlesInputObjectSchema } from './tblTitSubClassCreateWithoutTblTitlesInput.schema';
import { tblTitSubClassUncheckedCreateWithoutTblTitlesInputObjectSchema as tblTitSubClassUncheckedCreateWithoutTblTitlesInputObjectSchema } from './tblTitSubClassUncheckedCreateWithoutTblTitlesInput.schema';
import { tblTitSubClassCreateOrConnectWithoutTblTitlesInputObjectSchema as tblTitSubClassCreateOrConnectWithoutTblTitlesInputObjectSchema } from './tblTitSubClassCreateOrConnectWithoutTblTitlesInput.schema';
import { tblTitSubClassCreateManyTblTitlesInputEnvelopeObjectSchema as tblTitSubClassCreateManyTblTitlesInputEnvelopeObjectSchema } from './tblTitSubClassCreateManyTblTitlesInputEnvelope.schema';
import { tblTitSubClassWhereUniqueInputObjectSchema as tblTitSubClassWhereUniqueInputObjectSchema } from './tblTitSubClassWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblTitSubClassCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitSubClassCreateWithoutTblTitlesInputObjectSchema).array(), z.lazy(() => tblTitSubClassUncheckedCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitSubClassUncheckedCreateWithoutTblTitlesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblTitSubClassCreateOrConnectWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitSubClassCreateOrConnectWithoutTblTitlesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblTitSubClassCreateManyTblTitlesInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblTitSubClassWhereUniqueInputObjectSchema), z.lazy(() => tblTitSubClassWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblTitSubClassCreateNestedManyWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblTitSubClassCreateNestedManyWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitSubClassCreateNestedManyWithoutTblTitlesInput>;
export const tblTitSubClassCreateNestedManyWithoutTblTitlesInputObjectZodSchema = makeSchema();
