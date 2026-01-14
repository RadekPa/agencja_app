import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsCreateWithoutTblTitlesInputObjectSchema as tblSubmissionsCreateWithoutTblTitlesInputObjectSchema } from './tblSubmissionsCreateWithoutTblTitlesInput.schema';
import { tblSubmissionsUncheckedCreateWithoutTblTitlesInputObjectSchema as tblSubmissionsUncheckedCreateWithoutTblTitlesInputObjectSchema } from './tblSubmissionsUncheckedCreateWithoutTblTitlesInput.schema';
import { tblSubmissionsCreateOrConnectWithoutTblTitlesInputObjectSchema as tblSubmissionsCreateOrConnectWithoutTblTitlesInputObjectSchema } from './tblSubmissionsCreateOrConnectWithoutTblTitlesInput.schema';
import { tblSubmissionsCreateManyTblTitlesInputEnvelopeObjectSchema as tblSubmissionsCreateManyTblTitlesInputEnvelopeObjectSchema } from './tblSubmissionsCreateManyTblTitlesInputEnvelope.schema';
import { tblSubmissionsWhereUniqueInputObjectSchema as tblSubmissionsWhereUniqueInputObjectSchema } from './tblSubmissionsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblSubmissionsCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblSubmissionsCreateWithoutTblTitlesInputObjectSchema).array(), z.lazy(() => tblSubmissionsUncheckedCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblSubmissionsUncheckedCreateWithoutTblTitlesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblSubmissionsCreateOrConnectWithoutTblTitlesInputObjectSchema), z.lazy(() => tblSubmissionsCreateOrConnectWithoutTblTitlesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblSubmissionsCreateManyTblTitlesInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema), z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblSubmissionsUncheckedCreateNestedManyWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblSubmissionsUncheckedCreateNestedManyWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsUncheckedCreateNestedManyWithoutTblTitlesInput>;
export const tblSubmissionsUncheckedCreateNestedManyWithoutTblTitlesInputObjectZodSchema = makeSchema();
