import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitAuthorsCreateWithoutTblTitlesInputObjectSchema as tblTitAuthorsCreateWithoutTblTitlesInputObjectSchema } from './tblTitAuthorsCreateWithoutTblTitlesInput.schema';
import { tblTitAuthorsUncheckedCreateWithoutTblTitlesInputObjectSchema as tblTitAuthorsUncheckedCreateWithoutTblTitlesInputObjectSchema } from './tblTitAuthorsUncheckedCreateWithoutTblTitlesInput.schema';
import { tblTitAuthorsCreateOrConnectWithoutTblTitlesInputObjectSchema as tblTitAuthorsCreateOrConnectWithoutTblTitlesInputObjectSchema } from './tblTitAuthorsCreateOrConnectWithoutTblTitlesInput.schema';
import { tblTitAuthorsCreateManyTblTitlesInputEnvelopeObjectSchema as tblTitAuthorsCreateManyTblTitlesInputEnvelopeObjectSchema } from './tblTitAuthorsCreateManyTblTitlesInputEnvelope.schema';
import { tblTitAuthorsWhereUniqueInputObjectSchema as tblTitAuthorsWhereUniqueInputObjectSchema } from './tblTitAuthorsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblTitAuthorsCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitAuthorsCreateWithoutTblTitlesInputObjectSchema).array(), z.lazy(() => tblTitAuthorsUncheckedCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitAuthorsUncheckedCreateWithoutTblTitlesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblTitAuthorsCreateOrConnectWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitAuthorsCreateOrConnectWithoutTblTitlesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblTitAuthorsCreateManyTblTitlesInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblTitAuthorsWhereUniqueInputObjectSchema), z.lazy(() => tblTitAuthorsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblTitAuthorsUncheckedCreateNestedManyWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblTitAuthorsUncheckedCreateNestedManyWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuthorsUncheckedCreateNestedManyWithoutTblTitlesInput>;
export const tblTitAuthorsUncheckedCreateNestedManyWithoutTblTitlesInputObjectZodSchema = makeSchema();
