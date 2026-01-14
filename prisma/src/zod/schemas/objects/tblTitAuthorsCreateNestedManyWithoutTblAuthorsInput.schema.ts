import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitAuthorsCreateWithoutTblAuthorsInputObjectSchema as tblTitAuthorsCreateWithoutTblAuthorsInputObjectSchema } from './tblTitAuthorsCreateWithoutTblAuthorsInput.schema';
import { tblTitAuthorsUncheckedCreateWithoutTblAuthorsInputObjectSchema as tblTitAuthorsUncheckedCreateWithoutTblAuthorsInputObjectSchema } from './tblTitAuthorsUncheckedCreateWithoutTblAuthorsInput.schema';
import { tblTitAuthorsCreateOrConnectWithoutTblAuthorsInputObjectSchema as tblTitAuthorsCreateOrConnectWithoutTblAuthorsInputObjectSchema } from './tblTitAuthorsCreateOrConnectWithoutTblAuthorsInput.schema';
import { tblTitAuthorsCreateManyTblAuthorsInputEnvelopeObjectSchema as tblTitAuthorsCreateManyTblAuthorsInputEnvelopeObjectSchema } from './tblTitAuthorsCreateManyTblAuthorsInputEnvelope.schema';
import { tblTitAuthorsWhereUniqueInputObjectSchema as tblTitAuthorsWhereUniqueInputObjectSchema } from './tblTitAuthorsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblTitAuthorsCreateWithoutTblAuthorsInputObjectSchema), z.lazy(() => tblTitAuthorsCreateWithoutTblAuthorsInputObjectSchema).array(), z.lazy(() => tblTitAuthorsUncheckedCreateWithoutTblAuthorsInputObjectSchema), z.lazy(() => tblTitAuthorsUncheckedCreateWithoutTblAuthorsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblTitAuthorsCreateOrConnectWithoutTblAuthorsInputObjectSchema), z.lazy(() => tblTitAuthorsCreateOrConnectWithoutTblAuthorsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblTitAuthorsCreateManyTblAuthorsInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblTitAuthorsWhereUniqueInputObjectSchema), z.lazy(() => tblTitAuthorsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblTitAuthorsCreateNestedManyWithoutTblAuthorsInputObjectSchema: z.ZodType<Prisma.tblTitAuthorsCreateNestedManyWithoutTblAuthorsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuthorsCreateNestedManyWithoutTblAuthorsInput>;
export const tblTitAuthorsCreateNestedManyWithoutTblAuthorsInputObjectZodSchema = makeSchema();
